export function createChoice(choice) {
    const label = document.createElement('label');
    label.classList.add('choice');

    const radio = document.createElement('input'); 
    radio.type = 'radio';
    radio.name = 'choice';
    radio.value = choice.id;
    label.append(radio);

    const choiceText = document.createElement('span');
    choiceText.textContent = choice.description;
    label.append(choiceText);
    
    return label;
}