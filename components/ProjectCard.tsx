// components/ProjectCard.tsx
import Image from "next/image";
type Props = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export default function ProjectCard({ title, description, image, tags }: Props) {
  return (
    <div className="border rounded-2xl overflow-hidden shadow hover:shadow-md transition">
      <Image src={image} alt={title} width={800} height={500} className="w-full h-48 object-cover" />
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
