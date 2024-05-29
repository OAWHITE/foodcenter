<!-- resources/views/recipes/list.blade.php -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recipe List</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <div class="container mt-5">
        <h1 class="mb-4">Recipe List</h1>

        @if ($recipes->count())
            <div class="row">
                @foreach ($recipes as $recipe)
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="{{ $recipe->image }}" class="card-img-top" alt="{{ $recipe->title }}">
                            <div class="card-body">
                                <h5 class="card-title">{{ $recipe->title }}</h5>
                                <p class="card-text">{{ $recipe->description }}</p>
                                <p class="card-text"><strong>Region:</strong> {{ $recipe->region }}</p>
                                <h6>Instructions:</h6>
                                <p class="card-text">{{ $recipe->instructions }}</p>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>

            <!-- Pagination Links -->
            <div class="d-flex justify-content-center">
                {{ $recipes->links() }}
            </div>
        @else
            <p>No recipes found.</p>
        @endif
    </div>
</body>
</html>
