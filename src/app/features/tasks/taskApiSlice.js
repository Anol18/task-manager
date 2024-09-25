import { apiSlice } from "../../apiSlice";

const taskApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTasks: builder.query({
			query: ({ pageNumber, PageSize, priority, status, dueDate }) => ({
				url: `/tasks?page=${pageNumber}&limit=${PageSize}&priority=${priority}&status=${status}&sortBy=${dueDate}&order=desc`,
				method: "GET",
			}),
			providesTags: (result) => {
				// If result is undefined or empty, return just the "LIST" tag
				if (!result) return [{ type: "Task", id: "LIST" }];

				// Check if result contains an array of tasks directly, or inside a property like `data` or `tasks`
				const tasks = Array.isArray(result)
					? result
					: result.data || result.tasks;

				return tasks
					? [
							{ type: "Task", id: "LIST" }, // Tag for the entire task list
							...tasks.map(({ id }) => ({ type: "Task", id })), // Individual task tags
					  ]
					: [{ type: "Task", id: "LIST" }];
			},
		}),

		createNewTask: builder.mutation({
			query: (data) => ({
				url: `/tasks`,
				method: "POST",
				body: { ...data },
			}),
			// Optimistic update for creating a new task
			async onQueryStarted(taskData, { dispatch, queryFulfilled }) {
				const patchResult = dispatch(
					taskApiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
						draft.push(taskData); // Optimistically add the new task to the list
					})
				);
				try {
					await queryFulfilled; // Wait for the mutation to succeed
				} catch {
					patchResult.undo(); // Undo the optimistic update if the mutation fails
				}
			},
			invalidatesTags: [{ type: "Task", id: "LIST" }], // Invalidate the task list after creation
		}),

		updateTask: builder.mutation({
			query: ({ id, data }) => ({
				url: `/tasks/${id}`,
				method: "PUT",
				body: { ...data },
			}),
			// Optimistic update for updating a task
			async onQueryStarted({ id, data }, { dispatch, queryFulfilled }) {
				const patchResult = dispatch(
					taskApiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
						const task = draft.find((task) => task.id === id);
						if (task) {
							Object.assign(task, data); // Optimistically apply the update
						}
					})
				);
				try {
					await queryFulfilled; // Wait for the mutation to succeed
				} catch {
					patchResult.undo(); // If mutation fails, revert the optimistic update
				}
			},
			invalidatesTags: (result, error, { id }) => [{ type: "Task", id }],
		}),

		deleteTask: builder.mutation({
			query: (id) => ({
				url: `/tasks/${id}`,
				method: "DELETE",
			}),
			// Optimistic update for deleting a task
			async onQueryStarted(id, { dispatch, queryFulfilled }) {
				// Optimistically remove the task from the cache
				const patchResult = dispatch(
					taskApiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
						const index = draft.findIndex((task) => task.id === id);
						if (index !== -1) {
							draft.splice(index, 1); // Optimistically remove the task
						}
					})
				);
				try {
					await queryFulfilled; // Wait for the mutation to succeed
				} catch {
					patchResult.undo(); // If deletion fails, undo the optimistic update
				}
			},
			invalidatesTags: (result, error, id) => [{ type: "Task", id }], // Invalidate only the deleted task
		}),
	}),
});

export const {
	useGetTasksQuery,
	useCreateNewTaskMutation,
	useUpdateTaskMutation,
	useDeleteTaskMutation,
} = taskApiSlice;
