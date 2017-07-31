import thinky from './thinky'
const type = thinky.type
import { requiredString, optionalString, timestamp } from './custom-types'

const InteractionStep = thinky.createModel('interaction_step', type.object().schema({
  id: type.string(),
  campaign_id: requiredString(),
  //PROMPTS:
  question: optionalString(),
  script: optionalString(),
  //START NEW
  //previously there were answer options, and no such thing as
  // parents/ancestors.  This was pretty cool, in-theory
  // since you could have many paths that led into a unified
  // path.  However, the UI didn't allow it, so we are going
  // to squash that dream, at least until after the db migration
  // FIELDS FOR SUB-INTERACTIONS (only)
  parent_interaction_id: optionalString(),
  answer_option: optionalString(), //(was 'value')
  //END NEW
  created_at: timestamp()
}).allowExtra(false))

InteractionStep.ensureIndex('campaign_id')

export default InteractionStep
