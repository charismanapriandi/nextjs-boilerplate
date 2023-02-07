export default function compose(...hoc: any[]) {
  return (x: any) => hoc.reduceRight((a, b) => b(a), x)
}