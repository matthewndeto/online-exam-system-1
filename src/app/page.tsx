
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Search, Box, Users } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Online Examination System
              </h1>
            </div>
          </div>
        </section>
        
        <section className="w-full pb-12 md:pb-24 lg:pb-32">
            <div className="container grid items-start justify-center gap-8 px-4 md:px-6 lg:grid-cols-3">
                 <Card className="text-center flex flex-col h-full">
                    <CardHeader>
                        <div className="mx-auto bg-red-100 rounded-full p-4 w-fit">
                            <Search className="w-8 h-8 text-red-600" />
                        </div>
                        <CardTitle className="mt-4">How to Log In</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">
                            Click the login button below to proceed with logging in using your email address. On the redirected page, enter your email address and password in the designated fields.
                        </p>
                    </CardContent>
                    <CardFooter className="justify-center">
                        <Button variant="outline" asChild>
                          <Link href="/courses">Log In</Link>
                        </Button>
                    </CardFooter>
                 </Card>

                 <Card className="text-center flex flex-col h-full">
                    <CardHeader>
                        <div className="mx-auto bg-red-100 rounded-full p-4 w-fit">
                           <Box className="w-8 h-8 text-red-600" />
                        </div>
                        <CardTitle className="mt-4">Tutorials</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">
                            Learn more on how to access the system and how to access and submit your exams.
                        </p>
                    </CardContent>
                    <CardFooter className="justify-center">
                         <Button variant="outline" asChild>
                           <Link href="/tutorials">Watch Video</Link>
                         </Button>
                    </CardFooter>
                 </Card>
                 
                 <Card className="text-center flex flex-col h-full">
                    <CardHeader>
                        <div className="mx-auto bg-red-100 rounded-full p-4 w-fit">
                           <Users className="w-8 h-8 text-red-600" />
                        </div>
                        <CardTitle className="mt-4">Get Help</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">
                            Access our Online Helpdesk for ticketing and live support.
                        </p>
                    </CardContent>
                    <CardFooter className="justify-center">
                         <Button variant="outline" asChild>
                           <Link href="/help">Learn More</Link>
                         </Button>
                    </CardFooter>
                 </Card>
            </div>
        </section>
      </main>
    </div>
  );
}
