import Input from './components/Input';

function App() {
  return (
    <div className="min-h-screen bg-black/90 text-white p-5 flex flex-col gap-5">
      <h5 className="font-bold text-xl tracking-wider">Book Quote Generator</h5>
      <div className="mt-10">
        <Input />
      </div>
    </div>
  );
}

export default App;
