import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface NavItemProps {
  title: string;
  link: string;
  icon: React.ReactNode;
}
export default function NavItem({ link, icon }: NavItemProps) {
  const router = useRouter();

  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(router.pathname.includes(link));
  }, [router.pathname, link]);

  return (
    <motion.li
      whileHover={{ scale: 1.5 }}
      className={`${selected ? "text-primary-100 text-3xl" : "text-primary-800 text-2xl"}`}
    >
      <Link href={link}>{icon}</Link>
    </motion.li>
  );
}
