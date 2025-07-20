import { Badge } from "@/components/ui/badge";
import { aiFunctions } from "@/lib/ai-functions";
import Link from "next/link";

export default function LifeCoachAIFunctionsPage() {
  return (
    <div className="bg-gradient-to-br from-background to-secondary/30 min-h-screen">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold font-headline tracking-tight sm:text-5xl md:text-6xl">
            AI Functions for Life Coaches
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-muted-foreground">
            A comprehensive list of AI-powered capabilities to enhance your coaching practice.
          </p>
        </div>

        <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-xl border">
          <h2 className="text-3xl font-bold font-headline mb-8 text-center sm:text-left">
            Available AI Capabilities
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
              <thead className="bg-secondary/50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold font-headline uppercase tracking-wider text-foreground">
                    Function Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold font-headline uppercase tracking-wider text-foreground">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold font-headline uppercase tracking-wider text-foreground">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {aiFunctions.map((func) => (
                  <tr key={func.name} className="hover:bg-secondary/30 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-foreground align-top">
                      <Link href={func.href} className="hover:text-primary">{func.name}</Link>
                    </td>
                    <td className="px-6 py-4 whitespace-pre-wrap text-sm text-muted-foreground align-top" style={{ minWidth: '300px', whiteSpace: 'normal' }}>
                      {func.description}
                    </td>
                    <td className="px-6 py-4 whitespace-pre-wrap text-sm text-muted-foreground align-top" style={{ minWidth: '300px', whiteSpace: 'normal' }}>
                      <Badge variant={func.isInstalled ? 'default' : 'outline'} className={func.isInstalled ? "bg-green-600/80 text-primary-foreground" : "bg-transparent"}>
                        {func.isInstalled ? 'Installed' : 'Coming Soon'}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
       <footer className="text-center py-6 text-sm text-muted-foreground">
          Powered by Firebase & AI
        </footer>
    </div>
  );
}
