import Header from "@/components/Header";
import ListItem from "@/components/ListItem";


export const revalidate = 0;


export default function Home() {
  return (
    <div
      className="
        bg-neutral-800 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      
      <Header>
        <div>
          Hello
        </div>
      </Header>
    </div>
  );
}
