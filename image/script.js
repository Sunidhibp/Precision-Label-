document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.annotation-types .btn');
    const descriptionContainer = document.getElementById('annotation-description');

    function updateDescription(type) {
        let description = '';

        switch (type) {
            case 'sentiment':
                description = 'Bounding boxes are rectangular boxes drawn around objects in an image to specify their location and size. Each box usually provides coordinates for the top-left and bottom-right corners of the rectangle. Widely used in object detection tasks where the goal is to detect and locate objects within an image. For example, identifying and locating cars, pedestrians, and animals in an image.';
                break;
            case 'intent':
                description = ' Polygons are annotations that outline objects with more precise shapes than bounding boxes by using multiple connected lines. This allows for capturing the exact boundaries of objects, especially those with irregular shapes. Used for tasks requiring detailed object localization and shape information, such as annotating objects with complex shapes like trees, buildings, or specific features in medical images.';
                break;
            case 'entity':
                description = 'Semantic segmentation involves labeling each pixel in an image with a class label to create a detailed map that shows which pixels belong to which object or region. However, it does not distinguish between different instances of the same object. Commonly used in scene understanding where the goal is to classify regions of an image into predefined categories, such as differentiating between roads, buildings, and vegetation in an aerial image.';
                break;
            case 'classification':
                description = 'Instance segmentation goes a step further than semantic segmentation by not only classifying each pixel but also differentiating between different instances of the same class. This means that each object instance in an image is separately identified and segmented. Essential for applications that require precise understanding of object instances, such as autonomous driving, where distinguishing between different cars and pedestrians is crucial.';
                break;
            case 'linguistic':
                description = ' Keypoint annotation involves marking specific points of interest within an image. These points usually represent significant features of an object, such as the eyes, nose, and mouth on a face or joints on a human body. Used in tasks like facial recognition, human pose estimation, and gesture recognition, where the exact location of specific features or parts is important for analysis.';
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
