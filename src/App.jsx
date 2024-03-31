import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Separator } from "@/components/ui/separator.jsx";
import "./App.css";

const transcriptions = [
  { id: 1, name: "Meeting 1", date: "2023-06-01", size: 12.5, summary: "Discussion about project timeline", status: "success" },
  { id: 2, name: "Interview 1", date: "2023-06-02", size: 0, summary: "", status: "transcription_failure" },
  { id: 3, name: "Presentation 1", date: "2023-06-03", size: 8.2, summary: "Q2 financial results", status: "success" },
  { id: 4, name: "Meeting 2", date: "2023-06-04", size: 0, summary: "", status: "chatgpt4_failure" },
  { id: 5, name: "Interview 2", date: "2023-06-05", size: 6.7, summary: "Candidate discussion", status: "success" },
  { id: 6, name: "Meeting 3", date: "2023-06-06", size: 14.1, summary: "Marketing strategy", status: "success" },
  { id: 7, name: "Presentation 2", date: "2023-06-07", size: 0, summary: "", status: "transcription_failure" },
  { id: 8, name: "Interview 3", date: "2023-06-08", size: 9.8, summary: "Candidate discussion", status: "success" },
  { id: 9, name: "Meeting 4", date: "2023-06-09", size: 0, summary: "", status: "chatgpt4_failure" },
  { id: 10, name: "Presentation 3", date: "2023-06-10", size: 11.3, summary: "Product launch", status: "success" },
];

function App() {
  const [data, setData] = useState(transcriptions);

  const handleRetry = (id) => {
    // Simulating retry logic
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, size: Math.floor(Math.random() * 20), summary: "Retried transcription", status: "success" };
      }
      return item;
    });
    setData(updatedData);
  };

  return (
    <Card className="container mx-auto mt-8">
      <CardHeader>
        <CardTitle>Transcriptions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>A list of transcriptions</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Size (MB)</TableHead>
              <TableHead>Summary</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.size}</TableCell>
                <TableCell>{item.summary}</TableCell>
                <TableCell>
                  <Badge variant={item.status === "success" ? "default" : "destructive"}>{item.status.replace("_", " ")}</Badge>
                </TableCell>
                <TableCell>
                  {item.size === 0 && (
                    <Button size="sm" onClick={() => handleRetry(item.id)}>
                      Retry
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default App;
