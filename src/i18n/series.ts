// 系列文章：文章 frontmatter 写 series: <key>，文章页底部会显示整个系列的目录
export const series: Record<string, { name: string; items: [string, string][] }> = {
  competitive: {
    name: '竞品分析三部曲',
    items: [
      ['竞品分析方法论：本质、目的与实操流程', '/thinking/competitive-analysis-method/'],
      ['AI 产品竞品分析：技术底座、产品体验与商业生态', '/thinking/ai-product-competitive-analysis/'],
      ['如何用 AI 做竞品分析：人机分工、工作流与提示词', '/thinking/competitive-analysis-with-ai/'],
    ],
  },
};
