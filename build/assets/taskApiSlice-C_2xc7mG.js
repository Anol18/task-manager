import{aU as y}from"./index-BOP-Y-Uy.js";const n=y.injectEndpoints({endpoints:u=>({getDashboard:u.query({query:()=>({url:"/dashboard",method:"GET"})}),getTasks:u.query({query:({pageNumber:a,PageSize:t,priority:e,status:r,dueDate:s})=>({url:`/tasks?page=${a}&limit=${t}&priority=${e}&status=${r}&sortBy=${s}&order=asc`,method:"GET"}),providesTags:a=>{if(!a)return[{type:"Task",id:"LIST"}];const t=Array.isArray(a)?a:a.data||a.tasks;return t?[{type:"Task",id:"LIST"},...t.map(({id:e})=>({type:"Task",id:e}))]:[{type:"Task",id:"LIST"}]}}),createNewTask:u.mutation({query:a=>({url:"/tasks",method:"POST",body:{...a}}),async onQueryStarted(a,{dispatch:t,queryFulfilled:e}){const r=t(n.util.updateQueryData("getTasks",void 0,s=>{s.push(a)}));try{await e}catch{r.undo()}},invalidatesTags:[{type:"Task",id:"LIST"}]}),updateTask:u.mutation({query:({id:a,data:t})=>({url:`/tasks/${a}`,method:"PUT",body:{...t}}),async onQueryStarted({id:a,data:t},{dispatch:e,queryFulfilled:r}){const s=e(n.util.updateQueryData("getTasks",void 0,i=>{const d=i.find(o=>o.id===a);d&&Object.assign(d,t)}));try{await r}catch{s.undo()}},invalidatesTags:(a,t,{id:e})=>[{type:"Task",id:e}]}),deleteTask:u.mutation({query:a=>({url:`/tasks/${a}`,method:"DELETE"}),async onQueryStarted(a,{dispatch:t,queryFulfilled:e}){const r=t(n.util.updateQueryData("getTasks",void 0,s=>{const i=s.findIndex(d=>d.id===a);i!==-1&&s.splice(i,1)}));try{await e}catch{r.undo()}},invalidatesTags:(a,t,e)=>[{type:"Task",id:e}]}),viewTaskById:u.query({query:a=>({url:`/tasks/${a}`,method:"GET"})})})}),{useViewTaskByIdQuery:k,useGetDashboardQuery:c,useGetTasksQuery:p,useCreateNewTaskMutation:h,useUpdateTaskMutation:l,useDeleteTaskMutation:m}=n;export{k as a,h as b,l as c,m as d,p as e,c as u};