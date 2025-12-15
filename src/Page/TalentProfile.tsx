import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentPage/Profile";
import { profile } from "../../public/Data/TalentData";
import RecomondedTalent from "../TalentPage/RecomondedTalent";
const TalentProfilePage = () => {
  return (
    <div className="min-h-screen bg-mine-shaft-950 font-['poppins'] p-4">
    
      <Link to="/find-talent" className="inline-block mb-6">
        <Button
          leftSection={<IconArrowLeft size={20} />}
          color="brightSun.4"
          variant="light"
        >
          Back
        </Button>
      </Link>
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6">
  
        <div className="col-span-2">
          <Profile {...profile} />
        </div>

       
        <div className="col-span-1">
         <RecomondedTalent/>
        </div>
      </div>
    </div>
  );
};

export default TalentProfilePage;
