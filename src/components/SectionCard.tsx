import ItemCard from "./ItemCard";

interface SectionProps {
  title: string;
  items: {
    id: string;
    title: string;
    subtitle: string;
    time: string;
    imageUrl: string;
  }[];
  isPlaylist?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, items, isPlaylist }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold text-white">{title}</h3>
        <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">See all</a>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            time={item.time}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );

export default Section;