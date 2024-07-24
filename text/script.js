document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.annotation-types .btn');
    const descriptionContainer = document.getElementById('annotation-description');

    function updateDescription(type) {
        let description = '';

        switch (type) {
            case 'sentiment':
                description = 'Often, humans tend to be sarcastic in their responses. Especially on websites and reviews, we tend to share our bad experiences with a restaurant or a hotel through sarcasm and machines could easily misinterpret them as compliments. If every sarcastic comment is learned as a compliment by machines, this would completely skew the results. That’s why sentiment annotation becomes crucial. This technique specifies the emotion or attitude behind a sentence (sarcasm in this case) and every sentence is labelled as neutral, positive, or negative.';
                break;
            case 'intent':
                description = 'This technique differentiates the intentions of users. When interacting with chatbots, different users respond with different intentions. Some request statements, others command responses for overcharges, a few confirm the status of an order, while some people respond with sarcasm. Hence, every response is labelled with an intention of request, confirmation, command, etc.';
                break;
            case 'entity':
                description = 'Entity annotation is a type of text annotation where named entities are labeled in a text. Named entities are words or phrases that refer to specific things, such as people, places, organizations, products, and events. Entity annotation is important for many natural language processing (NLP) tasks, such as named entity recognition (NER), machine translation, and question answering. Entity annotation is an important task for many NLP applications. By labeling entities in text, we can help machines to understand the structure and meaning of text, which can lead to improved performance on a variety of NLP tasks.';
                break;
            case 'classification':
                description = 'Text classification, also known as text categorization or document classification, is a type of text annotation that involves assigning a single label to a body of text or short lines of text. Annotators read the text and analyze its content, subject, intent, and sentiment to classify it into categories based on a predetermined list. Text classification can be used to organize, structure, and categorize many types of text, including documents, medical studies, files, and web content. For example, annotators might classify an article section as entertainment or sports, or categorize products in an e-commerce store. Assigning a single label to a document can also be useful for sorting large amounts of textual content.';
                break;
            case 'linguistic':
                description = 'Linguistic annotation, also known as corpus annotation, is the process of identifying and marking grammatical, semantic, or phonetic elements in text or audio recordings. It is a key part of text analysis, which also includes annotating other features like punctuation, tone, and word length. Linguistic annotation is used to create AI training datasets for a variety of NLP solutions such as chatbots, virtual assistants, search engines, machine translation and more. These are just five types of text annotation commonly used in machine learning today.';
                break;
            default:
                description = 'Click on any button to see the description.';
                break;
        }

        descriptionContainer.innerHTML = `<p>${description}</p>`;

        // Remove 'active' class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked button
        const clickedButton = document.querySelector(`.btn[data-type="${type}"]`);
        if (clickedButton) {
            clickedButton.classList.add('active');
        }
    }

    // Prevent default action and update description on button click
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const type = this.getAttribute('data-type');
            updateDescription(type);
        });
    });

    // Set the default button as the first button
    if (buttons.length > 0) {
        const firstButton = buttons[0];
        firstButton.classList.add('active');
        updateDescription(firstButton.getAttribute('data-type'));
    }
});
