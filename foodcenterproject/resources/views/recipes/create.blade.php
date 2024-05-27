<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Recipe</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <div class="container mt-5">
        <h1>Create Recipe</h1>
        <form id="recipeForm" method="POST" action="{{ route('recipes.store') }}" enctype="multipart/form-data">
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" class="form-control" id="title" name="title" required>
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea class="form-control" id="description" name="description" required></textarea>
            </div>
            <div class="mb-3">
                <label for="instructions" class="form-label">Instructions</label>
                <textarea class="form-control" id="instructions" name="instructions" required></textarea>
            </div>
            <div class="mb-3">
                <label for="rating" class="form-label">Rating</label>
                <input type="number" class="form-control" id="rating" name="rating">
            </div>
            <div class="mb-3">
                <label for="calories" class="form-label">Calories</label>
                <input type="number" class="form-control" id="calories" name="calories">
            </div>
            <div class="mb-3">
                <label for="region" class="form-label">Region</label>
                <input type="text" class="form-control" id="region" name="region">
            </div>
            <div class="mb-3">
                <label for="image" class="form-label">Image</label>
                <input type="file" class="form-control" id="image" name="image" accept="image/*" required>
            </div>
            <div class="mb-3">
                <label for="ingredient_id" class="form-label">Ingredient ID</label>
                <input type="number" class="form-control" id="ingredient_id" name="ingredient_id" required>
            </div>
            <button type="button" onclick="submitForm()" class="btn btn-primary">Submit</button>
        </form>
    </div>
    <script>
     async function submitForm() {
    const form = document.getElementById('recipeForm');
    const formData = new FormData(form);

    try {
        const response = await fetch('{{ route('recipes.store') }}', {
    method: 'POST',
    body: formData
});


        if (!response.ok) {
            const responseData = await response.json();
            console.error('Error:', responseData);
            return;
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

    </script>
</body>
</html>
