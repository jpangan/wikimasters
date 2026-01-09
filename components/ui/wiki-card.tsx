import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface WikiCardProps {
  name: string;
  title: string;
  author: string;
  date: string | Date;
  summary: string;
  href: string;
}

export function WikiCard({
  name,
  title,
  author,
  date,
  summary,
  href,
}: WikiCardProps) {
  const formattedDate =
    date instanceof Date
      ? date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : date;

  return (
    <Link href={href} className="block">
      <Card className="hover:bg-accent/50 transition-colors">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {name} • {author} • {formattedDate}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-muted-foreground line-clamp-2 text-sm">
              {summary}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default WikiCard;
