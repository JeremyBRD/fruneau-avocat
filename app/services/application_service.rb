class ApplicationService
  def self.call(*args, **kwargs, &)
    new(*args, **kwargs, &).call
  end

  def self.alias_call(alias_name)
    singleton_class.send(:alias_method, alias_name, :call)
  end
end
