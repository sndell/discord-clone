import { HiChatBubbleLeft, HiCog6Tooth, HiPlus, HiUser } from 'react-icons/hi2';
import { useAuth } from '../../features/auth';

type AppLayoutProps = {
  children: React.ReactNode;
};

const Sidebar = () => {
  const { user } = useAuth();
  return (
    <div className="flex flex-col justify-between px-3 pb-3 h-[100dvh] bg-secondary">
      <div className="flex flex-col flex-1 gap-3 pt-3 mb-3 overflow-y-auto no-scrollbar">
        <button className="p-2 rounded-full bg-background group">
          <HiPlus className="text-2xl text-secondary group-hover:text-primary" />
        </button>
        <button className="bg-[url(https://i.imgur.com/oba24P6.jpeg)] min-h-[40px] bg-cover rounded-full" />
        <button className="bg-[url(https://i.imgur.com/oba24P6.jpeg)] min-h-[40px] bg-cover rounded-full" />
        <button className="bg-[url(https://i.imgur.com/oba24P6.jpeg)] min-h-[40px] bg-cover rounded-full" />
        <button className="bg-[url(https://i.imgur.com/oba24P6.jpeg)] min-h-[40px] bg-cover rounded-full" />
        <button className="bg-[url(https://i.imgur.com/oba24P6.jpeg)] min-h-[40px] bg-cover rounded-full" />
        <button className="bg-[url(https://i.imgur.com/oba24P6.jpeg)] min-h-[40px] bg-cover rounded-full" />
        <button className="bg-[url(https://i.imgur.com/oba24P6.jpeg)] min-h-[40px] bg-cover rounded-full" />
        <button className="bg-[url(https://i.imgur.com/oba24P6.jpeg)] min-h-[40px] bg-cover rounded-full" />
        <button className="bg-[url(https://i.imgur.com/oba24P6.jpeg)] min-h-[40px] bg-cover rounded-full" />
        <button className="bg-[url(https://i.imgur.com/oba24P6.jpeg)] min-h-[40px] bg-cover rounded-full" />
        <button className="bg-[url(https://i.imgur.com/oba24P6.jpeg)] min-h-[40px] bg-cover rounded-full" />
        <button className="bg-[url(https://i.imgur.com/oba24P6.jpeg)] min-h-[40px] bg-cover rounded-full" />
        <button className="bg-[url(https://i.imgur.com/oba24P6.jpeg)] min-h-[40px] bg-cover rounded-full" />
        <button className="bg-[url(https://i.imgur.com/oba24P6.jpeg)] min-h-[40px] bg-cover rounded-full" />
        <button className="bg-[url(https://i.imgur.com/oba24P6.jpeg)] min-h-[40px] bg-cover rounded-full" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="p-2 transition-colors rounded-lg cursor-pointer group hover:bg-background">
          <HiUser className="text-2xl transition-colors text-secondary group-hover:text-primary" />
        </div>
        <div className="p-2 transition-colors rounded-lg cursor-pointer group hover:bg-background ">
          <HiChatBubbleLeft className="text-2xl transition-colors text-secondary group-hover:text-primary" />
        </div>
        <div className="p-2 transition-colors rounded-lg cursor-pointer group hover:bg-background ">
          <HiCog6Tooth className="text-2xl transition-colors text-secondary group-hover:text-primary" />
        </div>
        <img
          src={user?.photoUrl}
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};
