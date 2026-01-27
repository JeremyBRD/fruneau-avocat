# Propshaft configuration
# Ensure the builds directory is included in the asset paths
Rails.application.config.assets.paths << Rails.root.join("app/assets/builds").to_s
