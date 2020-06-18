/**
 * @module 侧边栏配置
 * @desc 每一项表示在当前属性名路径下，侧边栏的显示情况。
 * 例如，路径为 /运营后台/* 时，侧边栏为 组件一。
 * 数组，第一项为路径，第二项为显示的文字
 */


module.exports = {

  '/tool/': [
    {
      title: '组件',   // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 2,    // 可选的, 默认值是 1
      children: [
        ['通用组件/', '通用组件'],
        ['通用组件/Button', '按钮组件'],
        ['通用组件/Image', '图片基础组件'],
        ['通用组件/PagingTable', '列表组件'],
        ['通用组件/CascaderProductClass', '级联选择器'],
        ['通用组件/Container', '容器组件']
      ]
    }
  ]
}
