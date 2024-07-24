document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.annotation-types .btn');
    const descriptionContainer = document.getElementById('annotation-description');

    function updateDescription(type) {
        let description = '';

        switch (type) {
            case 'sentiment':
                description = ' Bounding boxes in video annotation involve drawing rectangular boxes around objects of interest within each frame of a video. These boxes specify the location and size of the objects. Used for object detection tasks, such as tracking vehicles, people, or animals across frames in a video. It is fundamental for applications like autonomous driving, security surveillance, and activity recognition.';
                break;
            case 'intent':
                description = ' Polygon annotation involves drawing irregular shapes with multiple connected lines to outline the precise boundaries of objects in a video. This allows for more accurate localization than bounding boxes. Useful for annotating objects with complex shapes, such as buildings, trees, or specific regions in medical videos. It is essential in applications requiring detailed object localization, like satellite imagery analysis and biomedical research.';
                break;
            case 'entity':
                description = 'Semantic segmentation in video annotation involves classifying each pixel in every frame into a predefined category. This creates a detailed map where each pixel is labeled with the class of the object it belongs to. Applied in tasks that require understanding of the entire scene, such as autonomous driving, where it is necessary to differentiate between road, pavement, vehicles, and pedestrians. It is also used in robotics and video surveillance for scene understanding.';
                break;
            case 'classification':
                description = 'Keypoint annotation involves marking specific points of interest on objects within video frames. These points usually represent significant features like joints on a human body (e.g., elbows, knees) or facial landmarks (e.g., eyes, nose, mouth). Commonly used in human pose estimation, gesture recognition, and facial recognition. It is critical in sports analysis, animation, and developing interactive systems that respond to human movements.';
                break;
            case 'linguistic':
                description = '3D cuboid annotation involves drawing three-dimensional boxes around objects in a video to capture their spatial properties and orientation in a 3D space. This annotation provides depth information along with the object location and size. Essential for applications that require understanding of an object position and volume in a 3D space, such as autonomous driving (for recognizing other vehicles and obstacles), robotics, and augmented reality.';
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
