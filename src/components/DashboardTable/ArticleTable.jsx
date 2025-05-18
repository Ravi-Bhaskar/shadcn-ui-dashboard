import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import ArticleRow from "./ArticleRow";
import ArticleTableSkeleton from "../Loader/ArticleTableSkeleton";

const dummyArticles = [
  {
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends [2240000]",
    words: 4575,
    createdOn: "20 hours ago",
  },
  {
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends [2240000]",
    words: 3480,
    createdOn: "21 hours ago",
  },
  {
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends [2240000]",
    words: 2676,
    createdOn: "a day ago",
  },
  {
    title: "Top Virtual Executive Assistant Services",
    keyword: "virtual executive assistant [2900]",
    words: 2408,
    createdOn: "1 Oct, 24",
  },
  {
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services [1904]",
    words: 1974,
    createdOn: "---",
  },
  {
    title: "Backlinks 101: Why They're Important [Free Tools]",
    keyword: "backlinks [980]",
    words: 2298,
    createdOn: "---",
  },
];

const ArticlesTable = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Card>
        <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <CardTitle className="text-xl">Articles</CardTitle>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <Input
                type="text"
                placeholder="Search for title or keyword..."
                className="w-full sm:w-[300px]"
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full sm:w-auto">
                    Filter <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-2">
                  <Button variant="ghost" className="w-full justify-start">
                    Published
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Draft
                  </Button>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
        </CardHeader>
      <CardContent className="overflow-x-auto">
        {loading ? (
          <ArticleTableSkeleton />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="cursor-pointer">
                  Title
                </TableHead>
                <TableHead className="cursor-pointer">
                  Keyword [Traffic]
                </TableHead>
                <TableHead className="cursor-pointer">
                  Words
                </TableHead>
                <TableHead className="cursor-pointer">
                  Created On
                </TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dummyArticles.map((article, i) => (
                <ArticleRow key={i} article={article} />
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
};

export default ArticlesTable;
