import circleIcon from "@/assets/icons/blue-circle.svg";
import settingIcon from "@/assets/icons/settings.svg";
import Image from "next/image";

interface ColumnHeaderProps {
  title: string;
  columnId: number;
  count: number;
}
function ColumnHeader({ title, columnId, count }: ColumnHeaderProps) {
  return (
    <div>
      <Image src={circleIcon} alt="Circle Icon" />
      {title}
      {count} <Image src={settingIcon} alt="setting Icon" />
    </div>
  );
}

export default ColumnHeader;
