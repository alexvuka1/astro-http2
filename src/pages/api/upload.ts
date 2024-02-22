import { APIRoute } from 'astro';

export const POST: APIRoute = async (ctx) => {
  const { request } = ctx;

  const fileReader = request.body?.getReader();

  if (!fileReader)
    return new Response(null, {
      status: 400,
    });

  const fileBuffer: Uint8Array[] = [];
  // Continue reading the stream for the file data
  while (true) {
    const { value, done } = await fileReader.read();
    if (done) break;
    fileBuffer.push(value); // Accumulate file data chunks
  }

  const file = new File(fileBuffer, '');
  console.log(file);

  return new Response(null, { status: 200 });
};
