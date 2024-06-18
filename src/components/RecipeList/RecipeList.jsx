import { RecipeListItem } from 'components/RecipeListItem/RecipeListItem';

export const RecipeList = ({ recipes }) => {
  return (
    <ul>
      {recipes.map(recipe => (
        <RecipeListItem key={recipe.id} />
      ))}
    </ul>
  );
};
