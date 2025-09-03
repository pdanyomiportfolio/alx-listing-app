// Props for Card component
export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string; // optional
}

// Props for Button component
export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}
