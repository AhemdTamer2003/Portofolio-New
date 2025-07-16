import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="ahmedmarketing7575@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+201100932553" Image={FiPhone} />
      <SingleInfo text="Cairo, Egypt" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
