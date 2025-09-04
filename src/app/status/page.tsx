import { StatusContent } from "@/components/ui/status-content";

export default function Status() {
  return (
    <div className="min-h-screen bg-white">
      {/* Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-[40%] -right-[20%] w-[80%] h-[80%] bg-blue-600 rounded-full blur-3xl" />
        <div className="absolute -bottom-[40%] -left-[20%] w-[80%] h-[80%] bg-[#FFDD00] rounded-full blur-3xl" />
      </div>

      <div className="relative min-h-screen flex flex-col">
        <main className="flex-1">
          <StatusContent />
        </main>
      </div>
    </div>
  );
} 