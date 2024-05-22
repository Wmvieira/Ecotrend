interface IconWrapperProps extends React.ComponentProps<"div"> {
  icon: React.ReactNode;
}

export default function IconWrapper({ icon, ...props }: IconWrapperProps) {
  const { className } = props;
  return (
    <div
      {...props}
      className={`rounded-md border-2 border-secondary-foreground bg-secondary p-1 ${className}`}
    >
      {icon}
    </div>
  );
}

export const iconWrapperClass = "h-full w-full p-1";
