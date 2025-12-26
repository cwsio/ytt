import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md border-border shadow-lg">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-destructive" />
            <h1 className="text-2xl font-bold font-serif text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            The page you requested could not be found. It may have been moved or deleted.
          </p>

          <div className="mt-8 flex justify-end">
             <Link href="/" className="px-6 py-2 bg-navy text-white rounded hover:bg-navy/90 transition-colors font-medium">
                Return Home
             </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
