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
	第九届·会长团: [
		{
			name: "张威老师",
			image: "/images/device/default.png",
			specs: "指导老师",
			description: "这是一句简介",
			link: "",
		},
		{
			name: "周虹池",
			image: "/images/device/default.png",
			specs: "会长",
			description: "这是一句简介",
			link: "",
		},
	],
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
			description: "这是一句简介",
			link: "",
		},
		{
			name: "潘宁",
			image: "/images/device/panning.jpg",
			specs: "副会长",
			description: "心志要坚，意趣要乐。",
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
			image: "/images/device/zhangjunjie.jpg",
			specs: "副会长",
			description: "第八届汽车人协会副会长",
			link: "",
		},		
		{
			name: "李荣桂",
			image: "/images/device/lironggui.jpg",
			specs: "车队队长",
			description: "实践是检验真理的唯一标准",
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
			image: "/images/device/zhaoxiaodong.jpg",
			specs: "副会长",
			description: "一个连续四年加入汽车人的汽车人老粉丝",
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
			image: "/images/device/liyongxing.jpg",
			specs: "副会长",
			description: `第四届汽车人协会干事 第五届汽车人协会技术部部长 第六届汽车人协会会长`,
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
