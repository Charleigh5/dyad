import Sidebar from '../components/layout/Sidebar';
import MainContent from '../components/layout/MainContent';
import Terminal from '../components/layout/Terminal';
import ChatPanel from '../components/layout/ChatPanel';

export default function IdeLayout() {
  return (
    <div className="flex h-screen bg-black text-white font-sans">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <MainContent />
        <Terminal />
      </div>
      <ChatPanel />
    </div>
  );
}
