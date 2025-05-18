import React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { day: 'Sun', articles: 6 },
  { day: 'Mon', articles: 9 },
  { day: 'Tue', articles: 14 },
  { day: 'Wed', articles: 9 },
  { day: 'Thu', articles: 11 },
  { day: 'Fri', articles: 8 },
  { day: 'Sat', articles: 6 },
];

const Charts = () => {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Articles Created (Weekly)</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="day" stroke="#888888" fontSize={12} />
            <YAxis stroke="#888888" fontSize={12} />
            <Bar dataKey="articles" fill="#d6bcfa" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default Charts;
