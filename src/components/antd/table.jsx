import { Table as AntdTable } from "antd";
import PropType from "prop-types";
export default function Table(props) {
	const { id, columns, data, totalCount, pagination, width } = props;

	return (
		<>
			<AntdTable
				size="small"
				scroll={{
					x: width || 1500,
					y: 1000,
				}}
				columns={columns}
				dataSource={data}
				rowKey={id}
				{...props}
				pagination={{
					...pagination,
					current: pagination?.pageNumber || 1,
					total: totalCount,
					showSizeChanger: true,
					showTotal: (total, range) =>
						`${range[0]}-${range[1]} of ${total} items`,
					pageSizeOptions: ["10", "25", "50", "100"],
					size: "small",
					showQuickJumper: true,
				}}
			/>
		</>
	);
}

Table.propTypes = {
	id: PropType.string,
	columns: PropType.array,
	data: PropType.array,
	totalCount: PropType.number,
	pagination: PropType.object,
	width: PropType.number,
};
