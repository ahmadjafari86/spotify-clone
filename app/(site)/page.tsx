import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

export default function Home() {
  return (
    <main>
      <h2 className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
        <Header>
          <div className="mb-2">
            <h1 className=" text-white text-3xl font-semibold">
              Welcome to music
            </h1>
            <div className="gird grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
              <ListItem />
            </div>
          </div>
        </Header>
      </h2>
    </main>
  );
}
