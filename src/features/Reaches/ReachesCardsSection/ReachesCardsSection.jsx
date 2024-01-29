import './ReachesCardsSection.css'
import { REACHES_CARDS_INFO } from '../../../utils/reaches-card-info'
import ReachesCard from '../../../components/ReachesCard/ReachesCard.astro'
import Button from '../../../components/Button/Button'

export default function ReachesCardsSection() {
   return (
      <div className="reaches-cards-section">
         {REACHES_CARDS_INFO.map(item => (
            <ReachesCard
               bgColor={item.bgCardColor}
               textColor={item.textCardColor}
               image={item.image}
               title={item.title}
               text={item.text}
               id={item.id}
            >
               <Button
                  data-function="see_more"
                  bgColor={item.bgButtonColor}
                  textColor={item.textButtonColor}
               >Ver mas</Button>
            </ReachesCard>
         ))}
      </div>
   )
}


