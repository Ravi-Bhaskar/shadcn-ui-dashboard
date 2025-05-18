import React from "react";
import { TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const ArticleRow = ({ article }) => (
  <TableRow>
    <TableCell>{article.title}</TableCell>
    <TableCell>{article.keyword}</TableCell>
    <TableCell>{article.words}</TableCell>
    <TableCell>{article.createdOn}</TableCell>
    <TableCell className="text-right">
      <Button size="sm" variant="outline">View</Button>
    </TableCell>
  </TableRow>
);

export default ArticleRow;
