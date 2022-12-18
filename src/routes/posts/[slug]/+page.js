export async function load({ params }){
  console.log('ARGS:', arguments)
  const post = await import(`../${params.slug}.md`);
  return {
    content: post.default,
  }
}