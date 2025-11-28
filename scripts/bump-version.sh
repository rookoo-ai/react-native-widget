#!/bin/bash

# Version bump script for @rookoo/react-native-widget
# Usage: ./scripts/bump-version.sh [patch|minor|major]

set -e

# Default to patch if no argument provided
VERSION_TYPE=${1:-patch}

echo "🚀 Bumping $VERSION_TYPE version..."

# Validate version type
if [[ ! "$VERSION_TYPE" =~ ^(patch|minor|major)$ ]]; then
    echo "❌ Error: Version type must be patch, minor, or major"
    exit 1
fi

# Check if we're on main/master branch
CURRENT_BRANCH=$(git branch --show-current)
if [[ "$CURRENT_BRANCH" != "main" && "$CURRENT_BRANCH" != "master" ]]; then
    echo "⚠️  Warning: You're not on main/master branch (current: $CURRENT_BRANCH)"
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Aborted."
        exit 1
    fi
fi

# Check for uncommitted changes
if [[ -n $(git status --porcelain) ]]; then
    echo "❌ Error: You have uncommitted changes. Please commit or stash them first."
    exit 1
fi

# Run linting
echo "🔍 Running linting..."
npm run lint

# Bump version
echo "📦 Bumping version..."
NEW_VERSION=$(npm version $VERSION_TYPE --no-git-tag-version)

echo "✅ Version bumped to $NEW_VERSION"

# Update Example package.json to use the new version
echo "📝 Updating Example package.json..."
cd example
npm pkg set dependencies.@rookoo/react-native-widget="^${NEW_VERSION#v}"
cd ..

# Commit changes
echo "📝 Committing changes..."
git add .
git commit -m "chore: bump version to $NEW_VERSION"

# Create and push tag
echo "🏷️  Creating and pushing tag..."
git tag "$NEW_VERSION"
git push origin "$CURRENT_BRANCH" --tags

echo "🎉 Version $NEW_VERSION has been tagged and pushed!"
echo "📦 The GitHub Action will automatically publish to NPM."
echo "🔗 Check the action status at: https://github.com/rookoo/rookoo-react-native-widget/actions"
