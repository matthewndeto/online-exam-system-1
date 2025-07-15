
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { studentDashboardData } from "@/lib/mock-data";
import { 
  Home, 
  BookOpen, 
  DollarSign, 
  Building, 
  MessageSquare, 
  Video, 
  User, 
  Phone, 
  Lock,
  Menu,
  RefreshCw,
  LogOut,
  Settings,
  X,
  FileText,
  PenSquare
} from "lucide-react";
import Link from "next/link";

const navItems = [
    { icon: Home, label: "Home", href: "#" },
    { icon: BookOpen, label: "Academics Information", href: "#" },
    { icon: PenSquare, label: "Online Examination", href: "#" },
    { icon: DollarSign, label: "Finance Information", href: "#" },
    { icon: Building, label: "Accommodation", href: "#" },
    { icon: MessageSquare, label: "Message Center", href: "#" },
    { icon: Video, label: "Live Lessons", href: "#" },
    { icon: User, label: "Profile", href: "#" },
];

const otherInfoItems = [
    { icon: Phone, label: "School Contacts", href: "#" },
    { icon: Lock, label: "Change Password", href: "#" },
];

export default function StudentDashboard() {
  const { student, transactions, assignments, results } = studentDashboardData;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar text-sidebar-foreground flex flex-col fixed h-full">
        <div className="p-4 flex flex-col items-center border-b border-sidebar-border">
          <Avatar className="w-16 h-16 mb-2">
            <AvatarImage src="https://github.com/shadcn.png" alt={student.name} />
            <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h2 className="font-semibold text-center">{student.name}</h2>
          <p className="text-xs text-gray-400">{student.id}</p>
          <p className="text-xs text-gray-400">{student.year}</p>
        </div>
        
        <nav className="flex-1 overflow-y-auto">
          <div className="p-4">
            <h3 className="text-xs uppercase text-gray-500 mb-2">Main Navigation</h3>
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${item.label === 'Home' ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent/50'}`}>
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Separator className="my-2 bg-sidebar-border" />

          <div className="p-4">
            <h3 className="text-xs uppercase text-gray-500 mb-2">Other Information</h3>
            <ul className="space-y-1">
              {otherInfoItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-red-400 hover:bg-sidebar-accent/50">
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-header text-header-foreground p-3 flex justify-between items-center shadow-md sticky top-0 bg-white z-10">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-header-foreground hover:bg-header/80">
                <Menu className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-semibold">Student Portal</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-header-foreground hover:bg-header/80">
                <RefreshCw className="w-4 h-4" />
            </Button>
            <Link href="/student/login">
                <Button variant="ghost" size="icon" className="text-header-foreground hover:bg-header/80">
                    <LogOut className="w-4 h-4" />
                    <span className="sr-only">Sign out</span>
                </Button>
            </Link>
             <Button variant="ghost" size="icon" className="text-header-foreground hover:bg-header/80">
                <Settings className="w-4 h-4" />
            </Button>
          </div>
        </header>
        
        <main className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Recent Transactions */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-base font-medium">Recent Transactions</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="w-6 h-6"><X className="w-4 h-4" /></Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Item</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead className="text-right">Running Bal.</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions.map((t, i) => (
                        <TableRow key={i}>
                          <TableCell>{t.date}</TableCell>
                          <TableCell>{t.item}</TableCell>
                          <TableCell className="text-right">{t.amount}</TableCell>
                          <TableCell className="text-right">{t.balance}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="bg-gray-50 p-2 justify-end">
                    <Button variant="link" className="text-sm text-blue-600">
                      Current Balance: {student.balance} - Click to view all transactions
                    </Button>
                </CardFooter>
              </Card>

              {/* Fee Payment Instructions */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-base font-medium">Fee Payment Instructions</CardTitle>
                   <Button variant="ghost" size="icon" className="w-6 h-6"><X className="w-4 h-4" /></Button>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
                    <p className="font-bold">School fees are payable to the university bank account. Please refer to the official university documentation for account details. NB: CASH and/or Personal cheques will not be accepted.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* Assignments/Communication */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-base font-medium flex items-center gap-2"><FileText className="w-4 h-4" /> Assignments/Communication</CardTitle>
                   <Button variant="ghost" size="icon" className="w-6 h-6"><X className="w-4 h-4" /></Button>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {assignments.map((a, i) => (
                      <li key={i} className="flex justify-between items-center text-sm py-2 border-b">
                        <Link href={a.href} className="text-blue-600 hover:underline">{a.label}</Link>
                        <Badge variant="default" className="bg-green-500 hover:bg-green-600 text-white">{a.count}</Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                 <CardFooter className="justify-end p-2">
                    <Button variant="default" size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">View All</Button>
                </CardFooter>
              </Card>

              {/* My Exams */}
              <Card>
                 <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-base font-medium flex items-center gap-2"><FileText className="w-4 h-4" /> My Exams</CardTitle>
                   <Button variant="ghost" size="icon" className="w-6 h-6"><X className="w-4 h-4" /></Button>
                </CardHeader>
                <CardContent className="flex justify-end">
                  <Button variant="default" size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">View Exam History</Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Recent Provisional Results */}
           <Card className="mt-6">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base font-medium">Recent Provisional Results</CardTitle>
                 <Button variant="ghost" size="icon" className="w-6 h-6"><X className="w-4 h-4" /></Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Unit</TableHead>
                      <TableHead className="text-right">Grade</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {results.map((r, i) => (
                       <TableRow key={i}>
                         <TableCell className="font-medium">{r.unitCode} - {r.unitName}</TableCell>
                         <TableCell className="text-right font-bold">{r.grade}</TableCell>
                       </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
           </Card>

        </main>
      </div>
    </div>
  );
}
