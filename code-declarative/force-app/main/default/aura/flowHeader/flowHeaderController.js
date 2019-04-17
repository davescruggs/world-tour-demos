({
    onInit : function(component, event, helper) {
        const stepIndex = component.get('v.stageIndex');
        const stepCount = component.get('v.stageCount');
        const steps = [];
        for (let i=0; i<stepCount; i++) {
            steps.push({ label: 'Step '+ (i +1), value: 'step-'+ i });
        }
        component.set('v.steps', steps);
        component.find('progress').set('v.currentStep', 'step-'+ stepIndex);
    }
})
