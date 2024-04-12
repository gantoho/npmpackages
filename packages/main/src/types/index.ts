interface RawMainProps {
  align: 'left' | 'center' | 'right'; // 定义 align 属性及其可接受的值
  children: React.ReactNode; // children 属性通常为 ReactNode 类型
  className: string; // className 可选，类型为 string
}

type MainProps = Partial<RawMainProps>

export type {
  MainProps,
}
