import { cn } from "@/lib/utils";

interface AlgoliaBlueButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function AlgoliaBlueButton({ children, className, ...props }: AlgoliaBlueButtonProps) { 
  return ( 
    <button 
      className={cn(
        "algolia-orange-btn relative box-border inline-flex h-12 cursor-pointer touch-manipulation items-center justify-center overflow-hidden whitespace-nowrap rounded-md border-0 bg-orange px-6 font-mono leading-none text-white no-underline transition duration-150 ease-in-out hover:-translate-y-0.5 active:translate-y-0.5",
        className
      )}
      {...props}
    > 
      <style>{` 
        .algolia-orange-btn { box-shadow: rgba(45,35,66,0.4) 0 2px 4px, rgba(45,35,66,0.3) 0 7px 13px -3px, rgba(160, 90, 30, 0.5) 0 -3px 0 inset; } 
        .algolia-orange-btn:hover { box-shadow: rgba(45,35,66,0.4) 0 4px 8px, rgba(45,35,66,0.3) 0 7px 13px -3px, #D87F32 0 -3px 0 inset; } 
        .algolia-orange-btn:focus { box-shadow: #D87F32 0 0 0 1.5px inset, rgba(45,35,66,0.4) 0 2px 4px, rgba(45,35,66,0.3) 0 7px 13px -3px, #D87F32 0 -3px 0 inset; } 
        .algolia-orange-btn:active { box-shadow: #D87F32 0 3px 7px inset; } 
      `}</style> 
      {children || "Algolia Button"} 
    </button> 
  ); 
}
