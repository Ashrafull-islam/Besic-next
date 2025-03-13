export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    console.log(params)
    return <h1>params</h1>
  }