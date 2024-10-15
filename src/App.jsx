import Input from './components/Input';

function App() {
  return (
    <div className="min-h-screen bg-black/90 text-white p-5 flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <img src="logo.png" className="w-8" />
        <h5 className="font-bold text-lg text-primary tracking-wider -mt-1">
          Book Quote Generator
        </h5>
      </div>
      <div className="mt-4">
        <Input />
      </div>
    </div>
  );
}

export default App;
