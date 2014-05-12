class RemovePathFromApps < ActiveRecord::Migration
  def change
    remove_column :apps, :path, :string
  end
end
