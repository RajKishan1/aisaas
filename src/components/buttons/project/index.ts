import React from 'react'
import { Button } from '@/components/ui/button'
import { useProjectCreation } from '@/hooks/use-project'

type Props = {}

const CreateProject = (props: Props) => {
  const {CreateProject, isCreating, canCreate} = useProjectCreation()   
  return  (  
     <Button variant="default" onClick={()=>CreateProject()}
    disabled={!canCreate || isCreating} className="flex items-center gap-2 cursor-pointer rounded-full">
    {isCreating ? (
      <Loader2 className="h-4 w-4 animate-spin" />
    ): ( <PlusIcon className="h-4 w-4 "/> ) }
    {isCreating ? 'Creating...':"New Project"}
    </Button>
)
}


export default CreateProject