export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto my-[50px]">
      <p>
        Here is my portfolio. I've done it during the ski trip with the BDE.
      </p>
      <p>
        You will find some of my projects just below.
      </p>
      <p>
        I wrote a short presentation of me in the <a href="/about" className="text-blue-500">about</a> page.
      </p>
      <p>
        All my contacts informations are in the <a href="/contact" className="text-blue-500">contact</a> page.
      </p>
      <div className="my-[50px] space-y-12">
        <ul className="space-y-6">
          <li><text><a href="https://github.com/dawpitech/42sh" className="text-blue-500 underline decoration-wavy">42sh</a> - During the semester 2, my group and I made a shell in C.</text></li>
          <li>
            <text><a href="https://github.com/ZifFiji/corewar" className="text-blue-500 underline decoration-wavy">Corewar</a> - During the semester 2, my group and I created a replication of the game Core War in C.</text>
          </li>
          <li><text><a href="https://github.com/ZifFiji/sokoban" className="text-blue-500 underline decoration-wavy">Sokoban</a> - During the semester 1, I've done a created of the Sokoban in C.</text></li>
        </ul>
      </div>
    </div>
  );
}
