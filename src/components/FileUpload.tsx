import { createSignal } from 'solid-js';

export default function FileUpload() {
  const [file, setFile] = createSignal<File>();
  const handleClick = async () => {
    const init = {
      method: 'POST',
      body: file().stream(),
      duplex: 'half',
    } satisfies RequestInit & { duplex: 'half' };
    await fetch('/api/upload', init);
  };

  return (
    <>
      <input type="file" onChange={(e) => setFile(e.currentTarget.files[0])} />
      <button onClick={() => handleClick()}>Make API request</button>
    </>
  );
}
