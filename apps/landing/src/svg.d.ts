declare module '*.svg?react' {
  export default React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
}
