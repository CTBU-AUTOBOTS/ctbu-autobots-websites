// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	第八届·会长团: [
		{
			name: "张威老师",
			image: "/images/device/default.png",
			specs: "指导老师",
			description: "这是一句简介",
			link: "",
		},
		{
			name: "李定邦",
			image: "/images/device/default.png",
			specs: "会长",
			description: "原神",
			link: "",
		},
		{
			name: "潘宁",
			image: "/images/device/default.png",
			specs: "副会长",
			description: "这是一句简介",
			link: "",
		},
		{
			name: "李昊展",
			image: "/images/device/default.png",
			specs: "副会长",
			description: "这是一句简介",
			link: "",
		},
		{
			name: "章俊杰",
			image: "/images/device/default.png",
			specs: "副会长",
			description: "这是一句简介",
			link: "",
		},
	],
	第七届·会长团: [
		{
			name: "杨智宇老师",
			image: "/images/device/default.png",
			specs: "指导教师",
			description: "这是一句简介",
			link: "",
		},
		{
			name: "谭欣雨",
			image: "/images/device/default.png",
			specs: "会长",
			description: "这是一句简介",
			link: "",
		},
		{
			name: "吴易圃",
			image: "/images/device/default.png",
			specs: "副会长",
			description: "这是一句简介",
			link: "",
		},
		{
			name: "赵晓东",
			image: "/images/device/default.png",
			specs: "副会长",
			description: "这是一句简介",
			link: "",
		},
	],
	第六届·会长团: [
		{
			name: "杨智宇老师",
			image: "/images/device/default.png",
			specs: "指导教师",
			description: "这是一句简介",
			link: "",
		},
		{
			name: "滕一豪",
			image: "/images/device/default.png",
			specs: "会长",
			description: "这是一句简介",
			link: "",
		},
		{
			name: "李涌兴",
			image: "/images/device/default.png",
			specs: "副会长",
			description: "这是一句简介",
			link: "",
		},
	],
	第五届·会长团: [
		{
			name: "杨智宇老师",
			image: "/images/device/default.png",
			specs: "指导教师",
			description: "这是一句简介",
			link: "",
		},
		{
			name: "陈思思",
			image: "/images/device/default.png",
			specs: "会长",
			description: "这是一句简介",
			link: "",
		},
		{
			name: "何倩",
			image: "/images/device/default.png",
			specs: "副会长",
			description: "这是一句简介",
			link: "",
		},
		{
			name: "吴宇洁",
			image: "/images/device/default.png",
			specs: "副会长",
			description: "这是一句简介",
			link: "",
		},
	],
	第四届·会长团: [
		{
			name: "杨智宇老师",
			image: "/images/device/default.png",
			specs: "指导教师",
			description: "这是一句简介",
			link: "",
		},
		{
			name: "刘国言",
			image: "/images/device/default.png",
			specs: "会长",
			description: "这是一句简介",
			link: "",
		},
		{
			name: "赵凯宇",
			image: "/images/device/default.png",
			specs: "副会长",
			description: "这是一句简介",
			link: "",
		},
		{
			name: "李晓峰",
			image: "/images/device/default.png",
			specs: "副会长",
			description: "这是一句简介",
			link: "",
		},
	],
	第三届·会长团: [
		{
			name: "杨智宇老师",
			image: "/images/device/default.png",
			specs: "指导教师",
			description: "这是一句简介",
			link: "",
		},
		{
			name: "付春林",
			image: "/images/device/default.png",
			specs: "会长",
			description: "这是一句简介",
			link: "",
		},
	],
	第二届·会长团: [
		{
			name: "杨智宇老师",
			image: "/images/device/default.png",
			specs: "指导教师",
			description: "这是一句简介",
			link: "",
		},
		{
			name: "黄瑞",
			image: "/images/device/default.png",
			specs: "会长",
			description: "这是一句简介",
			link: "",
		},
	],
	第一届·会长团: [
		{
			name: "杨智宇老师",
			image: "/images/device/default.png",
			specs: "指导教师",
			description: "这是一句简介",
			link: "",
		},
		{
			name: "郑方杰",
			image: "/images/device/default.png",
			specs: "会长",
			description: "这是一句简介",
			link: "",
		},
		{
			name: "李程",
			image: "/images/device/default.png",
			specs: "会长",
			description: "这是一句简介",
			link: "",
		},
	],
	第X届·会长团: [
		{
			name: "姓名",
			image: "/images/device/default.png",
			specs: "职位",
			description: "描述",
			link: "",
		},
	],
};
